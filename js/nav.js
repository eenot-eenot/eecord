class pgMgr {

    page(page) {
        const navButtons = document.querySelectorAll('.page');
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(page)?.classList.add('active');
    }
}

// Создаем глобальный экземпляр менеджера после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('Инициализация pgMgr...');
    window.pgMgr = new pgMgr();
    console.log('pgMgr инициализирован:', window.pgMgr);
});
