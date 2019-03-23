import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener
} from "@angular/core";
import LINKS from "./navbar-links";
import { WindowWidthService } from "./window-width.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private resizeSubscription: Subscription;
  screenWidth = window.innerWidth;
  links = LINKS;
  constructor(private windowWidthService: WindowWidthService) {}

  @ViewChild("header", { read: ElementRef }) header: ElementRef;

  ngOnInit() {
    this.resizeSubscription = this.windowWidthService.onResize$.subscribe(
      window => this.onResize(window.innerWidth) // console.log(size)
    );
    this.links.forEach(element => {
      element.dropdown = false;
    });
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  // @HostListener("window:resize", ["$event"])
  onResize(size) {
    console.log(size);
    this.screenWidth = size;
    if (this.screenWidth > 767)
      this.header.nativeElement.classList.remove("menu-opened");
    // console.log(e.target.innerWidth);
  }

  handleMenuClick(e) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768)
      this.header.nativeElement.classList.toggle("menu-opened");
  }

  dropMenu(e, link) {
    link.dropdown ? (link.dropdown = false) : (link.dropdown = true);
    e.target.closest(".plus").classList.toggle("clicked");
  }
}
