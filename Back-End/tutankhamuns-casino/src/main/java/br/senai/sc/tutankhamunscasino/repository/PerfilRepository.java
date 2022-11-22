package br.senai.sc.tutankhamunscasino.repository;

import br.senai.sc.tutankhamunscasino.model.entities.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfilRepository extends JpaRepository<Perfil, Long> {

}

