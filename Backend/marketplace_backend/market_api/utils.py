import requests
from .models import ProductModel  

def fetch_products_once():
    api_url = 'https://dummyjson.com/products'
    page = 1  # Start at page 1
    while True:
        # Make a request with the current page
        response = requests.get(f'{api_url}?page={page}')
        
        if response.status_code == 200:
            data = response.json()
            products = data.get('products', [])
            
            # If no products are returned, break out of the loop
            if not products:
                break
            
            # Process and save products
            for item in products:
                ProductModel.objects.update_or_create(
                    name=item.get('title'),  # truncate to fit max_length
                    defaults={
                        'description': item.get('description')[:100],
                        'price': str(item.get('price')),
                        'image': item.get('images')[0] if item.get('images') else '',
                        'stock': item.get('stock', 0),
                    }
                )
            
            # Check if there's a next page (move to the next page)
            if 'next' not in data or not data['next']:
                break  # No more pages, exit the loop
            
            page += 1  # Move to the next page
        
        else:
            print(f"❌ Failed to fetch: {response.status_code}")
            break  # Exit the loop on failure

    print("✅ All products fetched and saved.")
