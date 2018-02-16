<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends Controller
{
    /**
     * @Route("/api/user/me", name="get_current_user")
     * @Method({"GET"})
     */
    public function me()
    {
        return JsonResponse::create($this->getUser()->toArray())->setStatusCode(200);
    }
    /**
     * @Route("/api/user/all", name="get_all_users")
     * @Method({"GET"})
     */
    public function findAll(UserRepository $userRepository)
    {
        return JsonResponse::create($userRepository->findAll())->setStatusCode(200);
    }

    /**
     * @Route("/api/register", name="user_registration")
     * @Method({"POST"})
     */
    public function registerAction(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        return $this->createUser($request, $passwordEncoder);

    }

    /**
     * @param Request                      $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     *
     * @return Response
     */
    private function createUser(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $content = json_decode($request->getContent(), true);
        $form->submit($content['data']);

        if ($form->isSubmitted() && $form->isValid()) {

            $password = $passwordEncoder->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);

            try {
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();
            } catch (UniqueConstraintViolationException $exception) {
                return JsonResponse::create([
                    'data' => [
                        'message' => 'user already exists'
                    ]
                ])->setStatusCode(400);
            }

            return (new Response())->setStatusCode(400);
        }

        return JsonResponse::create([
            'data' => [
                'message' => 'user data not valid'
            ]
        ])->setStatusCode(400);
    }
}
