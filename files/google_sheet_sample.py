import gspread
from oauth2client.service_account import ServiceAccountCredentials


# Create a new Google Spreadsheet
def create_sheet(credentials, title):
    gc = gspread.authorize(credentials)
    sh = gc.create(title)
    return sh

# Open a Google Spreadsheet
def open_sheet(credentials, title):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    return sh


# Read all data from a Google Spreadsheet
def read_all_data(credentials, title):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    data = worksheet.get_all_values()
    return data

# Write data to a Google Spreadsheet
def write_data(credentials, title, cell, data):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    worksheet.update(cell, data)


# Append data to a Google Spreadsheet
def append_data(credentials, title, data):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    worksheet.append_row(data)


# Clear data in a Google Spreadsheet
def clear_data(credentials, title):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    worksheet.clear()

# Find cells with specific content in a Google Spreadsheet
def find_cells(credentials, title, query):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    cell_list = worksheet.findall(query)
    return cell_list


# Count the number of rows and columns in a Google Spreadsheet
def count_rows_columns(credentials, title):
    gc = gspread.authorize(credentials)
    sh = gc.open(title)
    worksheet = sh.sheet1
    num_rows = worksheet.row_count
    num_cols = worksheet.col_count
    return num_rows, num_cols



# Use the credentials file you downloaded from the Google Cloud Console
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('path/to/your/credentials.json', scope)
client = gspread.authorize(creds)

# Open the test sheet by its name (make sure you have access to this sheet)
sheet = client.open("TestSheet").sheet1

# Get all values from the sheet
list_of_hashes = sheet.get_all_records()
print(list_of_hashes)

# Add a new row to the sheet
row = ["I'm","inserting","a","row","into","a,","Spreadsheet","with","Python"]
index = 1
sheet.insert_row(row, index)

# Update a value
sheet.update_cell(2, 2, "I just updated this cell!")

# Get a value
val = sheet.cell(2, 2).value
print(val)
