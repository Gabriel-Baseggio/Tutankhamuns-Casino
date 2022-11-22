package br.senai.sc.tutankhamunscasino.controller;

import br.senai.sc.tutankhamunscasino.dto.HistoricoDTO;
import br.senai.sc.tutankhamunscasino.model.entities.Historico;
import br.senai.sc.tutankhamunscasino.model.service.HistoricoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/tuthankamuns/historico")
public class HistoricoController {

    private HistoricoService historicoService;

    @GetMapping
    public ResponseEntity<List<Historico>> findAll() {
        return ResponseEntity.ok(historicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseEntity.ok(historicoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid HistoricoDTO historicoDTO) {
        Historico historico = new Historico();
        BeanUtils.copyProperties(historicoDTO, historico);

        return ResponseEntity.status(HttpStatus.OK).body(historicoService.save(historico));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!historicoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum historico com este id.");
        }

        historicoService.deleteById(id);

        return ResponseEntity.status(HttpStatus.OK).body("Historico deletado com sucesso.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid HistoricoDTO historicoDTO) {
        if (!historicoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhum perfil com este id.");
        }

        Historico historico = new Historico();
        BeanUtils.copyProperties(historicoDTO, historico);

        return ResponseEntity.status(HttpStatus.OK).body(historicoService.save(historico));
    }

}
