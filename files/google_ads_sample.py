import gspread
from google.oauth2.service_account import Credentials
import google.ads.google_ads.client

def read_data_from_sheet(sheet_id, service_account_file):
    scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
    creds = Credentials.from_service_account_file(service_account_file, scopes=scope)
    client = gspread.authorize(creds)
    sheet = client.open_by_key(sheet_id).sheet1  # assuming you're using the first sheet
    data = sheet.get_all_records()
    return data

# Initialize the Google Ads client.
google_ads_client = google.ads.google_ads.client.GoogleAdsClient.load_from_storage()


# Create ads
def create_ad(client, customer_id, ad_group_resource_name, headline, description, final_url):
    ad_group_ad_operation = client.get_type("AdGroupAdOperation")
    ad_group_ad = ad_group_ad_operation.create
    ad_group_ad.ad_group.value = ad_group_resource_name
    ad_group_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED
    ad_group_ad.ad.final_urls.append(final_url)
    ad_group_ad.ad.expanded_text_ad.headline_part1.value = headline
    ad_group_ad.ad.expanded_text_ad.description.value = description

    ad_group_ad_service = client.get_service("AdGroupAdService")
    response = ad_group_ad_service.mutate_ad_group_ads(customer_id, [ad_group_ad_operation])
    print(f"Created ad with resource name: {response.results[0].resource_name}")


# feed data from google sheet to your Google Ads
data = read_data_from_sheet('your_sheet_id', 'path_to_your_service_account.json')

for row in data:
    create_ad(google_ads_client, 'your_customer_id', row['ad_group_resource_name'], row['headline'], row['description'], row['final_url'])
