import { Component } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private fileTransfer;
  private directory;

  public img;
  public img2;

  constructor(private file: File, private transfer: FileTransfer) {

  }

  ngOnInit() {
    this.fileTransfer = this.transfer.create();
    this.directory = normalizeURL(this.file.dataDirectory);
  }

  download() {
    console.log(this.directory);

    this.fileTransfer.download("https://www.foodsconnected.com/Images/logo/foodsconnected_logo_blue.png", this.directory + "test.png")
      .then(entry => {
        console.log(entry);
        alert("Downloaded");
      }, (err) => {
        console.log(err);
        alert("error");
      });
  }

  getImage() {
    this.file.resolveDirectoryUrl(this.directory)
      .then(directoryEntry => {
        this.file.getFile(directoryEntry, "test.png", {create: false})
          .then(fileEntry => {
            this.img = fileEntry.nativeURL;
          }, err => {
            console.log("get file error", err);
          });

      }, err => {
        console.log(err);
      })

  }

  getImage2() {
    this.file.resolveLocalFilesystemUrl(this.directory + "test.png")
      .then(entry => {
        this.img2 = entry.nativeURL;
      })
      .catch(err => {
        console.log(err);
      })
  }
}
