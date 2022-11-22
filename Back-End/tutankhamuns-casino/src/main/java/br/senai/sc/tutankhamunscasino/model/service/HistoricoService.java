package br.senai.sc.tutankhamunscasino.model.service;

import br.senai.sc.tutankhamunscasino.model.entities.Historico;
import br.senai.sc.tutankhamunscasino.repository.HistoricoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoricoService {

    private HistoricoRepository historicoRepository;

    public HistoricoService(HistoricoRepository historicoRepository) {
        this.historicoRepository = historicoRepository;
    }

    public List<Historico> findAll(){
        return historicoRepository.findAll();
    }

    public Optional<Historico> findById(Long id){
        return historicoRepository.findById(id);
    }

    public <S extends Historico> S save(S entity) {
        return historicoRepository.save(entity);
    }

    public void deleteById(Long id) {
        historicoRepository.deleteById(id);
    }

    public Boolean existsById(Long id) {
        return historicoRepository.existsById(id);
    }
}
