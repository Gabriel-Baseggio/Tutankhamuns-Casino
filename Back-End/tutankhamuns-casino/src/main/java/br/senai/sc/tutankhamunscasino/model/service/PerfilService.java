package br.senai.sc.tutankhamunscasino.model.service;

import br.senai.sc.tutankhamunscasino.model.entities.Perfil;
import br.senai.sc.tutankhamunscasino.repository.PerfilRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfilService {

    private PerfilRepository perfilRepository;

    public PerfilService(PerfilRepository perfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    public List<Perfil> findAll(){
        return perfilRepository.findAll();
    }

    public Page<Perfil> findAll(Pageable pageable) {
        return perfilRepository.findAll(pageable);
    }

    public Optional<Perfil> findById(Long id){
        return perfilRepository.findById(id);
    }

    public <S extends Perfil> S save(S entity) {
        return perfilRepository.save(entity);
    }

    public void deleteById(Long id) {
        perfilRepository.deleteById(id);
    }

    public Boolean existsById(Long id){
        return perfilRepository.existsById(id);
    }

}
