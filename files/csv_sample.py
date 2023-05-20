import csv

# Write to a CSV file
with open('test.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["SN", "Name", "Contribution"])
    writer.writerow([1, "Linus Torvalds", "Linux Kernel"])

# Read from a CSV file
with open('test.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
