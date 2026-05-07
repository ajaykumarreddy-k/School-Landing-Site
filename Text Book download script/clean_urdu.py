import os
import re

def delete_urdu_content():
    base_dir = "downloads"
    links_file = "textbook_links.md"
    
    if not os.path.exists(base_dir):
        print(f"Directory {base_dir} not found.")
    else:
        print(f"Cleaning Urdu files from {base_dir}...")
        deleted_files_count = 0
        
        # Walk through the downloads directory
        for root, dirs, files in os.walk(base_dir):
            for file in files:
                if "urdu" in file.lower():
                    file_path = os.path.join(root, file)
                    try:
                        os.remove(file_path)
                        print(f"Deleted file: {file_path}")
                        deleted_files_count += 1
                    except Exception as e:
                        print(f"Error deleting {file_path}: {e}")
        
        print(f"Finished cleaning files. Total files deleted: {deleted_files_count}")

    # Also clean the textbook_links.md file if it exists
    if os.path.exists(links_file):
        print(f"Cleaning Urdu entries from {links_file}...")
        try:
            with open(links_file, 'r') as f:
                lines = f.readlines()
            
            new_lines = []
            removed_links_count = 0
            
            for line in lines:
                if "urdu" in line.lower():
                    removed_links_count += 1
                else:
                    new_lines.append(line)
            
            with open(links_file, 'w') as f:
                f.writelines(new_lines)
            
            print(f"Finished cleaning links file. Total entries removed: {removed_links_count}")
        except Exception as e:
            print(f"Error cleaning {links_file}: {e}")

if __name__ == "__main__":
    delete_urdu_content()
