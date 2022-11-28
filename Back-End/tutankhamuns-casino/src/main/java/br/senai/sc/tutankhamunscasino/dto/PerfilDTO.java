package br.senai.sc.tutankhamunscasino.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PerfilDTO {

    private String cpf;
    private String nome;
    private String email;
    private String senha;
    private Integer jogos;
    private Integer nivel;
    private Integer vitorias;
    private Integer derrotas;
    private double saldo;

}
