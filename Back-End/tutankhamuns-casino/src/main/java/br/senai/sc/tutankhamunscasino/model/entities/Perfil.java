package br.senai.sc.tutankhamunscasino.model.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "perfil")
@AllArgsConstructor
@NoArgsConstructor()
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Perfil {

    @Id
    @Column(nullable = false, length = 11)
    private String cpf;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 50)
    private String senha;

    @Column
    private Integer jogos;

    @Column(nullable = false)
    private Integer nivel;

    @Column
    private Integer vitorias;

    @Column
    private double saldo;

}
