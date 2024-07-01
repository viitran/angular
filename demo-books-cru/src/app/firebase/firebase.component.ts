import { Component, computed, inject, signal } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  percentage,
} from '@angular/fire/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firebase',
  standalone: true,
  templateUrl: './firebase.component.htm',
})
export default class FirebaseComponent {
  progress = signal('0%');

  file!: File;

  private readonly _storage = inject(Storage);

  susbscription: Subscription | undefined = undefined;

  changeInput(event: Event) {
    console.log(this._storage);
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.file = input.files[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    const storageRef = ref(this._storage, `uploads/${this.file.name}`);
    const task = uploadBytesResumable(storageRef, this.file);

    if (this.susbscription) {
      this.susbscription.unsubscribe();
      this.susbscription = undefined;
    }

    this.susbscription = percentage(task).subscribe(({ progress }) => {
      this.progress.set(`${progress}%`);
    });
  }
}