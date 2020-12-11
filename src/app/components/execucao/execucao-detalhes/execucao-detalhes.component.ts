import {Component, OnInit} from '@angular/core';
import {Execucao} from '../../../models/execucao.model';
import {ExecucaoService} from '../../../services/execucao.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-execucao-detalhes',
  templateUrl: './execucao-detalhes.component.html',
  styleUrls: ['./execucao-detalhes.component.css']
})
export class ExecucaoDetalhesComponent implements OnInit {
  execucao: Execucao;
  id: number;

  constructor(private execucaoService: ExecucaoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.execucao = execucaoService.getExecucaoPorId(this.id);
      }
    );
  }

  ngOnInit(): void {
  }

}
