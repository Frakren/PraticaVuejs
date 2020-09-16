const navBar=new Vue({
    el:"#navbar",
    data() {
        return {
            
        }
    },
    template:
    `
    <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Logo</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><input type="search"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Usuario</a>
        </li>
        </ul>
    </nav>
    `
})