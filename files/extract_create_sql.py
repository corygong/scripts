input_file_path = "/Volumes/Seagate Basic/Cory/Code/orange-sql/statistics.sql"
output_file_path = "./statistics.sql"

with open(input_file_path, "r") as input_file, open(output_file_path, "w") as output_file:
    inside_create_table = False
    for line in input_file:
        if line.startswith("CREATE TABLE"):
            inside_create_table = True
        if inside_create_table:
            output_file.write(line)
        if inside_create_table and line.strip().endswith(";"):
            inside_create_table = False
            output_file.write("\n")

print("Done. Extracted CREATE TABLE statements are in:", output_file_path)
