<?php

/**
 * @file
 * Lists available colors and color schemes for the ACF theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'headerfooterbg' => t('Header and Footer background'),
    'logo' => t('Logo'),
    'menu' => t('Menu link'),
    'menuhover' => t('Menu link hover'),
    'bg' => t('Main background'),
    'text' => t('Text color'),
    'link' => t('Link color'),
    'linkhover' => t('Link hover color'),
    'buttonhover' => t('Button hover color'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Gray (default)'),
      'colors' => [
        'headerfooterbg' => '#dddddd',
        'logo' => '#018dc6',
        'menu' => '#414142',
        'menuhover' => '#01a8e8',
        'bg' => '#ffffff',
        'text' => '#414141',
        'link' => '#01a8e7',
        'linkhover' => '#1dc0fe',
        'buttonhover' => '#0183b4',
      ],
    ],
    'blue' => [
      'title' => t('Blue'),
      'colors' => [
        'headerfooterbg' => '#0e68a7',
        'logo' => '#ffffff',
        'menu' => '#cccccc',
        'menuhover' => '#ffffff',
        'bg' => '#ffffff',
        'text' => '#414141',
        'link' => '#01a8e7',
        'linkhover' => '#1dc0fe',
        'buttonhover' => '#0183b4',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'assets/public/css/colors.css',
  ],

  // Preview files.
  'preview_library' => 'acf_demo_theme/color.preview',
  'preview_html' => 'color/preview.html',

];
