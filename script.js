const menuItems = document.querySelectorAll('.has-submenu');

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const submenu = this.nextElementSibling;
        const isOpen = this.classList.contains('open');
        
        // Eğer menü açıksa, tüm alt menüleri kapat
        if (isOpen) {
            this.classList.remove('open');
            submenu.classList.remove('show');
            
            // Alt menülerdeki tüm açık menüleri kapat
            const nestedSubmenus = submenu.querySelectorAll('.submenu.show');
            nestedSubmenus.forEach(nested => {
                nested.classList.remove('show');
                const nestedParent = nested.previousElementSibling;
                if (nestedParent && nestedParent.classList.contains('has-submenu')) {
                    nestedParent.classList.remove('open');
                }
            });
        } else {
            // Menüyü aç
            this.classList.add('open');
            submenu.classList.add('show');
        }
    });
});