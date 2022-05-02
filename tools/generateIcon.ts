import fs from 'fs'
import path from 'path'

import sharp from 'sharp'

const iconDirectory = path.join(__dirname, '../public/assets/icons')

const variants = [
  {
    name: 'manifest-128-maskable.png',
    size: 128,
    masked: false,
  },
  {
    name: 'manifest-192-maskable.png',
    size: 192,
    masked: false,
  },
  {
    name: 'manifest-512-maskable.png',
    size: 512,
    masked: false,
  },
  {
    name: 'manifest-512.png',
    size: 512,
    masked: true,
  },
  {
    name: 'manifest-192.png',
    size: 192,
    masked: true,
  },
  {
    name: 'manifest-180.png',
    size: 180,
    masked: true,
  },
  {
    name: 'manifest-128.png',
    size: 128,
    masked: true,
  },
  {
    name: 'manifest-120.png',
    size: 120,
    masked: true,
  },
  {
    name: 'apple-touch-icon.png',
    size: 180,
    masked: false,
  },
  {
    name: 'favicon-16x16.png',
    size: 16,
    masked: true,
  },
  {
    name: 'favicon-32x32.png',
    size: 32,
    masked: true,
  },
]

;(async () => {
  if (!fs.existsSync(iconDirectory)) {
    fs.mkdirSync(iconDirectory, {
      recursive: true,
    })
  }

  for (const variant of variants) {
    await sharp(
      path.join(
        __dirname,
        'input',
        variant.masked ? 'with-mask.png' : 'without-mask.png'
      )
    )
      .resize(variant.size)
      .toFile(path.join(iconDirectory, variant.name))
  }
})()
