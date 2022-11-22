package br.senai.sc.tutankhamunscasino.repository;

import br.senai.sc.tutankhamunscasino.model.entities.Historico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoRepository extends JpaRepository<Historico, Long> {

}
