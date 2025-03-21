import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbButtonComponent, NbButtonModule, NbIconModule, NbProgressBarModule } from "@nebular/theme";
import { NbFileUploaderComponent } from "./file-uploader.component";
import { NbUploadQueueItemComponent } from "./upload-queue-item.component";


@NgModule({
  declarations: [NbFileUploaderComponent, NbUploadQueueItemComponent, NbUploadQueueItemComponent],
  imports: [CommonModule, HttpClientModule, NbProgressBarModule,NbButtonModule,NbIconModule,NbEvaIconsModule],
  exports: [NbFileUploaderComponent, NbUploadQueueItemComponent, NbUploadQueueItemComponent],
  providers: [],
})
export class NbFileUploaderModule {}
