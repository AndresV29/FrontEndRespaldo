import {Component, OnInit} from '@angular/core';
import {PackageService} from "../../../logic-components/services/PackageService";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BehaviorSubject} from "rxjs";
import { Package } from 'src/app/logic-components/classes/Package';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
  packages: Package[] = [];

  constructor(private packageService: PackageService) {}
    //constructor(private packageService: PackageService, private modalService: NgbModal) {}
  ngOnInit() {
    this.packageService.packages$.subscribe((packages) => {
      this.packages = packages;
    });
  }
}

