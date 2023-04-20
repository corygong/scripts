import PyPDF2

# Open the PDF file in read binary mode
with open('example.pdf', 'rb') as pdf_file:
    
    # Create a PdfFileReader object
    pdf_reader = PyPDF2.PdfFileReader(pdf_file)
    
    # Get the number of pages in the PDF
    num_pages = pdf_reader.getNumPages()
    
    # Loop through each page and extract the text
    for i in range(num_pages):
        page = pdf_reader.getPage(i)
        text = page.extractText()
        print(text)
