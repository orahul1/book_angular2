"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_service_1 = require("./../app/book.service");
require("rxjs/Rx");
var BookComponent = (function () {
    function BookComponent(bookService) {
        this.bookService = bookService;
    }
    BookComponent.prototype.ngOnInit = function () {
        this.GetBooks();
    };
    BookComponent.prototype.GetBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    BookComponent.prototype.removeBook = function (id) {
        var _this = this;
        var books = this.books;
        this.bookService.removeBook(id).subscribe(function (data) {
            _this.GetBooks();
        });
    };
    BookComponent.prototype.addBook = function () {
        var _this = this;
        var newBook = {
            id: this.id,
            name: this.name,
            author: this.author
        };
        this.bookService.addBook(newBook)
            .subscribe(function (books) {
            _this.books.push(books);
            _this.id = '';
            _this.name = '';
            _this.author = '';
        });
    };
    BookComponent.prototype.findBook = function () {
        var _this = this;
        var id = this.searchid;
        this.bookService.findBook(id).subscribe(function (onebook) {
            _this.onebook = onebook;
            _this.id = '';
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'book',
        moduleId: module.id,
        templateUrl: 'book.component.html',
        providers: [book_service_1.BookService],
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map