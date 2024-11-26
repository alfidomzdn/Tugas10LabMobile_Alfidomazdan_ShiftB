Nama : Alfido Mazdan Marsyadi
NIM  : H1D022084
Shift B

![{90D613E0-F1F0-49EE-98E1-66BE7067FD4E}](https://github.com/user-attachments/assets/b140422b-55c1-4105-876a-c4f6cf1cb55d)
![{380053D7-C11A-4935-9ECD-A80EA99F5AC0}](https://github.com/user-attachments/assets/f975fd57-ee67-4838-8314-a9348d43cd10)
1. Create
 Gambar tersebut menggambarkan alur pembuatan todo baru ketika pengguna mengklik tombol "Tambah" yang terletak di pojok kanan bawah aplikasi. Setelah tombol tersebut ditekan, sebuah modal input akan muncul, memungkinkan pengguna untuk memasukkan judul dan deskripsi todo. Data yang diinputkan kemudian diproses oleh fungsi *handleSubmit*, yang selanjutnya memanggil *firestoreService.addTodo* untuk menyimpan data ke Firestore. Apabila penyimpanan berhasil, daftar todo akan diperbarui melalui fungsi *loadTodos*.

![{7BC2854A-E020-4A7A-A86B-CE53842C897F}](https://github.com/user-attachments/assets/9be5f4e8-9da4-4012-9f9d-4e8477754b8c)
3. Update
Proses pembaruan (update) memungkinkan pengguna untuk mengedit data atau mengubah status todo. Saat tombol edit ditekan, fungsi handleEdit akan dijalankan untuk menampilkan modal input yang berisi data todo yang sudah ada. Setelah pengguna menyimpan perubahan, fungsi handleSubmit akan memanggil firestoreService.updateTodo untuk memperbarui data di Firestore. Selain itu, pengguna juga dapat mengubah status tugas (aktif atau selesai) dengan menggunakan tombol status, yang akan memicu fungsi handleStatus untuk memperbarui status tugas di Firestore.

![{5158ADF5-2914-4FDF-BB30-2F425799FBF4}](https://github.com/user-attachments/assets/4fbab716-a2e4-4952-bf6b-78f2ec6f8b5a)
4. Delete
 Gambar ini menggambarkan proses penghapusan tugas, di mana pengguna dapat menghapus todo. Saat tombol hapus diklik, fungsi *handleDelete* akan dijalankan untuk menghapus data todo melalui *firestoreService.deleteTodo*. Setelah proses selesai, daftar tugas diperbarui dengan memanggil fungsi *loadTodos*. Proses ini dilengkapi dengan notifikasi (toast) yang memberikan umpan balik kepada pengguna untuk pengalaman yang lebih informatif dan responsif. Selain itu, juga ditampilkan proses penyelesaian tugas, di mana data diperbarui, dan tugas secara otomatis dipindahkan dari *activeTodos* ke *completedTodos*.
 
![{75956756-F3E7-4E81-ADE8-F4F97FDE83DB}](https://github.com/user-attachments/assets/6ba938ce-c511-45ff-97b8-247f5980583e)
