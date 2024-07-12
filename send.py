import requests
import json

CHANNEL_ACCESS_TOKEN = 'kF4QxphWyBV9je4KmPxqZWhbashsCHMYorGSnRrsT1S+bPxoDLy4hwkRaF27tp3WyMSujQfAUQliYe324KyaSDMYpgAfAdRzLVCjKeztuwsuG0tkdW0hCBnq1rMnISeYBecvVVj6cI6Aq8m5zvVKFAdB04t89/1O/w1cDnyilFU='

def create_receipt_message(items, total_price):
    receipt_message = "Receipt\n"
    for item in items:
        receipt_message += f"{item['name']}: {item['price']} .-\n"
    receipt_message += f"\nTotal Price: {total_price} .-"
    return receipt_message

def send_line_message(user_id, message):
    url = 'https://api.line.me/v2/bot/message/push'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {CHANNEL_ACCESS_TOKEN}'
    }
    data = {
        "to": user_id,
        "messages": [
            {
                "type": "text",
                "text": message
            }
        ]
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        print("Message successfully sent")
    else:
        print("Failed to send message", response.status_code, response.text)

# Example usage
receipt_items = [
    {'name': 'ข้าวกะเพราทะเลไข่ดาว', 'price': 60},
    {'name': 'ข้าวหมูกรอบคั่วพริกเกลือ', 'price': 100}
]
total_price = 160
user_id = 'U063a9fe1981fd713b09c2d36cd4d6a99'  # Replace with the actual LINE user ID

# Create the message
message = create_receipt_message(receipt_items, total_price)

# Send the message
send_line_message(user_id, message)