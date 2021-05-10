function Pager() {

    this.pager;
    this.table;
    this.navig;
    this.ipp;
    this.currentPage;
    this.totalPages;

    this.showRecords = function (from, to) {
        let rows = document.getElementById(this.table).rows;
        let max = 0;
        for (let i = 1; i < rows.length; i++) {
            if (i < from || i > to) {
                rows[i].style.display = 'none';
            } else {
                rows[i].style.display = '';
                if(i > max) {
                    max = i;
                }
            }
            rows[i].cells[0].style.borderRadius = '0px 0px 0px 0px';
            rows[i].cells[3].style.borderRadius = '0px 0px 0px 0px';
        }
        if(max != 0) {
            rows[max].cells[0].style.borderRadius = '0px 0px 0px 3px';
            rows[max].cells[3].style.borderRadius = '0px 0px 3px 0px';
        } else {
            rows[max].cells[0].style.borderRadius = '3px 0px 0px 3px';
            rows[max].cells[3].style.borderRadius = '0px 3px 3px 0px';
        }
    };

    this.showPage = function (pageNumber) {
        let oldPageAnchor = document.getElementById('pg' + this.currentPage);
        try {
            oldPageAnchor.className = 'page-link';
        } catch {
            console.log('No items to show!!');
        }
        this.currentPage = pageNumber;
        let newPageAnchor = document.getElementById('pg' + this.currentPage);
        try {
            newPageAnchor.className = 'page-link-selected';
        } catch {
            console.log('No items to show!!');
        }
        let from = (this.currentPage - 1) * this.ipp + 1;
        let to = this.currentPage * this.ipp;
        this.showRecords(from, to);
        window.scrollTo(0, 0);
    };

    this.prev = function () {
        if (this.currentPage > 1) {
            this.showPage(this.currentPage - 1);
        }
    };

    this.next = function () {
        if (this.currentPage < this.totalPages) {
            this.showPage(this.currentPage + 1);
        }
    };

    this.init = function (pager, table, navig, ipp) {
        this.pager = pager;
        this.table = table;
        this.navig = navig;
        this.ipp = ipp;
        this.currentPage = 1;
        let rows = document.getElementById(this.table).rows;
        let records = (rows.length - 1);
        this.totalPages = Math.ceil(records / this.ipp);
        this.showPageNav();
        this.showPage(1);
    };

    this.showPageNav = function () {
        let element = document.getElementById(this.navig), pagerHtml = '';
        pagerHtml += '<li class="page-item"><span class="page-link" onclick="'+this.pager+'.prev();" aria-hidden="true"><label>&laquo;</label></span></li>';
        for (let page = 1; page <= this.totalPages; page++) {
            pagerHtml += '<li class="page-item"><span id="pg'+page+'" class="page-link" onclick="'+this.pager+'.showPage('+page+');" aria-hidden="true"><label>'+page+'</label></span></li>';
        }
        pagerHtml += '<li class="page-item"><span class="page-link" onclick="'+this.pager+'.next();" aria-hidden="true"><label>&raquo;</label></span></li>';
        element.innerHTML = pagerHtml;
    };
    
}