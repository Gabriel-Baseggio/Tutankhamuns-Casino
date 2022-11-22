package br.senai.sc.tutankhamunscasino.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "historico")
@AllArgsConstructor
@NoArgsConstructor()
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Historico {

    @Id
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(nullable = false)
    private double valorAposta;

    @Column(nullable = false)
    private double valorResultado;

    // Foreign key

    @ManyToOne
    @JoinColumn(name = "cpf_perfil")
    private Perfil perfil;

}
