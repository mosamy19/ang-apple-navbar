import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener
} from "@angular/core";
import LINKS from "./navbar-links";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  screenWidth = window.innerWidth;
  links = LINKS;
  constructor() {}

  @ViewChild("header", { read: ElementRef }) header: ElementRef;

  ngOnInit() {}

  @HostListener("window:resize", ["$event"])
  onResize(e) {
    debugger;
    this.screenWidth = e.target.innerWidth; //= window.innerWidth;
    if (this.screenWidth > 767)
      this.header.nativeElement.classList.remove("menu-opened");
    // console.log(e.target.innerWidth);
  }

  handleMenuClick(e) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768)
      this.header.nativeElement.classList.toggle("menu-opened");
  }

  dropMenu(e) {
    e.target.closest(".plus").classList.toggle("clicked");
  }
}
