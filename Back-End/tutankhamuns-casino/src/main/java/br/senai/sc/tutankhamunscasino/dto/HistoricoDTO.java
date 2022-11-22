package br.senai.sc.tutankhamunscasino.dto;

import br.senai.sc.tutankhamunscasino.model.entities.Perfil;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HistoricoDTO {

    private double valorAposta;
    private double valorResultado;
    private Perfil perfil;

}
