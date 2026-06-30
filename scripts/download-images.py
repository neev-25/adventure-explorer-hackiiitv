"""Download all site images into assets/images/ subfolders."""
import os
import requests
from PIL import Image
from io import BytesIO

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, 'assets', 'images')

IMAGE_MAP = {
    # Page wallpapers (home/about/contact) are original project images — do not download over them.
    'trips/brahmatal.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&fit=crop',
    'trips/dalhousie-winter.jpg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop',
    'trips/kashmir-winter.jpg': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&fit=crop',
    'trips/kedarkantha.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&fit=crop',
    'trips/manali-winter.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&fit=crop',
    'trips/dharamshala.jpg': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&fit=crop',
    'trips/har-ki-dun.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&fit=crop',
    'trips/kasol-manali.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&fit=crop',
    'trips/kuari-pass.jpg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop',
    'trips/zanskar.jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&fit=crop',
    'team/arjun-mehta.jpg': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    'team/priya-nair.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    'team/vikram-singh.jpg': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    'team/ananya-reddy.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    'testimonials/priya-sharma.jpg': 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop',
    'testimonials/rajesh-patel.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    'testimonials/anita-desai.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
}


def resize_for_path(relative_path, img):
    if relative_path.startswith('hero/') or relative_path.startswith('pages/'):
        return img.resize((1920, 1080))
    if relative_path.startswith('team/') or relative_path.startswith('testimonials/'):
        return img.resize((400, 400))
    return img.resize((800, 600))


def download(relative_path, url):
    dest = os.path.join(ASSETS, relative_path.replace('/', os.sep))
    os.makedirs(os.path.dirname(dest), exist_ok=True)

    response = requests.get(url, timeout=30)
    response.raise_for_status()
    img = Image.open(BytesIO(response.content)).convert('RGB')
    img = resize_for_path(relative_path, img)
    img.save(dest, 'JPEG', quality=85)
    print(f'OK  {relative_path}')


def main():
    print('Downloading images to assets/images/ ...')
    for path, url in IMAGE_MAP.items():
        try:
            download(path, url)
        except Exception as exc:
            print(f'FAIL {path}: {exc}')
    print('Done.')


if __name__ == '__main__':
    main()
