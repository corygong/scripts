import PyPDF2
import io
from PIL import Image

pdf_path = "path/to/pdf/file.pdf"
pdf_reader = PyPDF2.PdfFileReader(open(pdf_path, "rb"))

for page_num in range(pdf_reader.getNumPages()):
    page = pdf_reader.getPage(page_num)
    if "/XObject" in page["/Resources"]:
        x_object = page["/Resources"]["/XObject"].getObject()
        for obj in x_object:
            if x_object[obj]["/Subtype"] == "/Image":
                size = (x_object[obj]["/Width"], x_object[obj]["/Height"])
                data = x_object[obj]._data
                mode = ""
                if x_object[obj]["/ColorSpace"] == "/DeviceRGB":
                    mode = "RGB"
                else:
                    mode = "P"

                if "/Filter" in x_object[obj]:
                    if x_object[obj]["/Filter"] == "/FlateDecode":
                        img = Image.frombytes(mode, size, data)
                        img.save(obj[1:] + ".png")
                    elif x_object[obj]["/Filter"] == "/DCTDecode":
                        img = open(obj[1:] + ".jpg", "wb")
                        img.write(data)
                        img.close()
                    elif x_object[obj]["/Filter"] == "/JPXDecode":
                        img = open(obj[1:] + ".jp2", "wb")
                        img.write(data)
                        img.close()
