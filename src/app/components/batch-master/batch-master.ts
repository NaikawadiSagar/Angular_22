import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-batch-master',
  styleUrl: './batch-master.css',
  templateUrl: './batch-master.html',
})
export class BatchMaster implements OnInit {

  batchlist: any[] = [];
  private http2 = inject(HttpClient);

  batchListSignal = signal<any[]>([]);

  newBatchObj: any = {
    batchId: 0,
    batchName: '',
    createdDate: ''
  }

  constructor(private http: HttpClient) {
    console.log("In Constructor")
  }
  ngOnInit() {
    console.log("Page Load");
    this.getBatchList()
  }

  getBatchList() {
    //debugger;
    this.http2.get("https://api.freeprojectapi.com/api/FeesTracking/batches").subscribe({
      next: (response: any) => {
        //debugger;
        this.batchListSignal.set(response)
      }, error: (error) => {
        console.log("API Error:", error);
      }
    })
  }

  saveNewBatch() {
    debugger;
    this.http2.post("https://api.freeprojectapi.com/api/FeesTracking/batches", this.newBatchObj).subscribe({
      next: (res: any) => {
        alert("New Batch Saved Successfull");
        this.getBatchList();
      },
      error: (err) => {
        alert(err.error.message);
      }
    })
  }

  reset() {
    this.newBatchObj = [];
  }

  getBatchById(data: any) {

    this.newBatchObj = {
      ...data,
      createdDate: data.createdDate?.split('T')[0]
    };

  }

  updateBatch() {
    debugger;
    this.http2.put("https://api.freeprojectapi.com/api/FeesTracking/batches/" + this.newBatchObj.batchId, this.newBatchObj).subscribe({
      next: (res: any) => {
        alert("Batch Data Updated Successfull");
        this.getBatchList();
        this.reset();
      },
      error: (err) => {
        alert(err.error.message);
      }
    })
  }

  deleteBatch(id: number) {
    if (confirm("Are you sure want to delete date")) {
      this.http2.delete("https://api.freeprojectapi.com/api/FeesTracking/batches/" + id).subscribe({
        next: (res: any) => {
          alert("Batch Deleted Successfull");
          this.getBatchList();
        },
        error: (err) => {
          alert(err.error.message);
        }
      })
    }

  }
}
