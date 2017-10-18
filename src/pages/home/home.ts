import { Component } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private file: File, private transfer: FileTransfer) {

  }

  ngOnInit() {
    const fileTransfer = this.transfer.create();
    var directory = this.file.dataDirectory;
    console.log(directory);
    directory = normalizeURL(directory);
    console.log(directory);


    fileTransfer.download("https://www.foodsconnected.com/Images/logo/foodsconnected_logo_blue.png", directory + "test.png")
      .then(entry => {
        console.log(entry);
      }, (err) => {
        console.log(err);
      });
  }
}
