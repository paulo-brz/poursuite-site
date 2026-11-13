<?php
// Formulário de contato do site Poursuite (PHP 7.4+). Envia pelo e-mail da própria hospedagem.
declare(strict_types=1);

const TO = 'contato@poursuite.com.br';
const FROM = 'contato@poursuite.com.br';
const THANKS = [
    'pt' => '/mensagem-enviada/',
    'en' => '/en/message-sent/',
    'es' => '/es/mensaje-enviado/',
    'fr' => '/fr/message-envoye/',
    'it' => '/it/messaggio-inviato/',
];
const BACK = ['pt' => '/contato/', 'en' => '/en/contact/', 'es' => '/es/contacto/', 'fr' => '/fr/contact/', 'it' => '/it/contatti/'];

function reply(bool $ok, string $lang, int $status = 200): void
{
    $json = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;
    if ($json) {
        http_response_code($ok ? 200 : $status);
        header('Content-Type: application/json');
        echo json_encode(['ok' => $ok]);
    } else {
        header('Location: ' . ($ok ? THANKS[$lang] : BACK[$lang] . '?erro=1'), true, 303);
    }
    exit;
}

function field(string $k, int $max): string
{
    $v = isset($_POST[$k]) ? trim((string) $_POST[$k]) : '';
    $v = str_replace(["\r\n", "\r"], "\n", $v);
    return mb_substr($v, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST', true, 405);
    exit;
}

$lang = isset($_POST['lang'], THANKS[$_POST['lang']]) ? (string) $_POST['lang'] : 'pt';

// Armadilha para robôs
if (!empty($_POST['website'])) {
    reply(true, $lang);
}

$name = preg_replace('/[\r\n]+/', ' ', field('name', 120));
$email = field('email', 160);
$company = preg_replace('/[\r\n]+/', ' ', field('company', 160));
$phone = preg_replace('/[\r\n]+/', ' ', field('phone', 40));
$profile = preg_replace('/[\r\n]+/', ' ', field('profile', 80));
$message = field('message', 5000);
$consent = ($_POST['consent'] ?? '') === 'yes';

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '' || !$consent) {
    reply(false, $lang, 422);
}

$subject = 'Contato pelo site: ' . $name . ($company !== '' ? " ($company)" : '');
$body = "Nova mensagem pelo site (" . strtoupper($lang) . ")\n\n"
    . "Nome: $name\nE-mail: $email\nEmpresa: " . ($company ?: '-') . "\n"
    . "Telefone: " . ($phone ?: '-') . "\nPerfil: " . ($profile ?: '-') . "\n\n"
    . $message . "\n";

$headers = [
    'From: Site Poursuite <' . FROM . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: poursuite-site',
];
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$ok = mail(TO, $encodedSubject, $body, implode("\r\n", $headers), '-f' . FROM);

reply($ok, $lang, 502);
