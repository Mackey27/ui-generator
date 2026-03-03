<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Template UI Generator - Create production-ready components with full customization">
    <meta name="theme-color" content="#00d4aa">
    <meta property="og:title" content="Template UI Generator">
    <meta property="og:description" content="Create beautiful, responsive UI components">
    <meta property="og:type" content="website">
    <title>Template UI Generator</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
    <style>
        html, body {
            margin: 0;
            height: 100%;
            overflow: hidden;
            overflow-x: hidden;
        }
        body {
            display: flex;
            flex-direction: column;
        }
        #app {
            flex: 1 1 auto;
            overflow-y: auto;
            overflow-x: hidden;
            min-height: 0;
        }
    </style>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div id="app"></div>
</body>
</html>
