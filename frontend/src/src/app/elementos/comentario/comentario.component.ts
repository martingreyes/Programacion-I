import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() usuario!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
