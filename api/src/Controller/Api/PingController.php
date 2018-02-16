<?php

namespace App\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class PingController extends Controller
{
    /**
     * If the JWT Token is still valid, the API returns true
     * @Route("/api/ping", name="ping")
     */
    public function index()
    {
        return JsonResponse::create(true);
    }
}
