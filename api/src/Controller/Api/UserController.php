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
     * @Route("/api/user/test/{id}", name="get_user_by_id", requirements={"id" = "\d+"})
     * @Method({"GET", "POST", "PATCH"})
     */
    public function update($id, Request $request, UserRepository $repository, UserPasswordEncoderInterface $passwordEncoder)
    {
        if ($request->getMethod() === 'GET') {
            return JsonResponse::create($repository->findById($id))->setStatusCode(200);
        }

        if ($request->getMethod() === 'PATCH') {
            return $this->patchUser($id, $request, $passwordEncoder);
        }

        if ($request->getMethod() === 'POST') {
            return $this->createUser($request, $passwordEncoder);
        }
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
     * @param $id
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     *
     * @return Response
     */
    private function patchUser($id, Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $content = json_decode($request->getContent(), true);

        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->find($id);

        if (!empty($content['data']['username'])) {
            $user->setUsername($content['data']['username']);
        }
        if (!empty($content['data']['email'])) {
            $user->setEmail($content['data']['email']);
        }
        if (!empty($content['data']['password'])) {
            $user->setPassword($passwordEncoder->encodePassword($user, $content['data']['password']));
        }

        $em->flush();

        return JsonResponse::create([
            'data' => [
                'message' => 'resource successfully updated'
            ]
        ]);
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
