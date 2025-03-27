import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  imports: [CommonModule],
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [
    { id: 1, produto: 'Jogo A', descricao: 'Descrição do Jogo A', preco: 100, foto: 'jogo1.png' },
    { id: 2, produto: 'Jogo B', descricao: 'Descrição do Jogo B', preco: 150, foto: 'jogo2.png' },
    { id: 3, produto: 'Jogo C', descricao: 'Descrição do Jogo C', preco: 200, foto: 'jogo3.png' }
  ];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  excluirProduto(id: number) {
    if (confirm("Deseja realmente excluir este produto?")) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert("Produto excluído com sucesso!");
        this.listarProdutos();
      });
    }
  }

  editarProduto(id: number) {
    this.router.navigate(['/cadastro-produto', id]);
  }
}

