import gspread
from google.oauth2.service_account import Credentials


# Use creds to create a client to interact with the Google Drive API
scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = Credentials.from_service_account_file('path_to_your_service_account.json', scopes=scope)
client = gspread.authorize(creds)

# Open the Google spreadsheet
spreadsheet = client.open("YourSpreadsheetName")



# Open the worksheet by its title
worksheet = spreadsheet.worksheet("YourWorksheetName")

# Get all values from the worksheet
list_of_hashes = worksheet.get_all_records()
print(list_of_hashes)

# Update a specific cell
worksheet.update('A1', 'Hello World!')

# Append data to the worksheet
row = ["A", "B", "C"]
index = 2
worksheet.insert_row(row, index)


# Set the font style for a range of cells
format_range = worksheet.range('A1:B2')
for cell in format_range:
    cell.set_text_format('bold', True)
worksheet.update_cells(format_range)

# Set the background color for a range of cells
format_range = worksheet.range('C1:C2')
for cell in format_range:
    cell.set_background_color((1.0, 0.0, 0.0, 1.0)) # RGB color
worksheet.update_cells(format_range)


# Resize a column
worksheet.resize_column(1, size=100)

# Hide a column
worksheet.hide_columns(2)

# Sort a column (1-indexed)
worksheet.sort((2, 'asc'))
