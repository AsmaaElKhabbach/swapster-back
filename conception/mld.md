author (id, lastname, firstname)

work (id, title, resume, #category_id)

category  (id, name)

book (id, isbn_13, cover_page, editor, publication_date, language, pages_number, height, width, thickness, #work_id) 

user (id, email, name, city, password, picture)

user_has_book (id, #book_id, #user_id, availability, status)

author_has_work (id, #work_id, #author_id)
