package br.senai.sc.tutankhamunscasino.controller;

import br.senai.sc.tutankhamunscasino.dto.HistoricoDTO;
import br.senai.sc.tutankhamunscasino.dto.PerfilDTO;
import br.senai.sc.tutankhamunscasino.model.entities.Historico;
import br.senai.sc.tutankhamunscasino.model.entities.Perfil;
import br.senai.sc.tutankhamunscasino.model.service.PerfilService;
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
@RequestMapping("/tutankhamun/perfil")
public class PerfilController {

    private PerfilService perfilService;

    @GetMapping
    public ResponseEntity<List<Perfil>> findAll() {
        return ResponseEntity.ok(perfilService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseEntity.ok(perfilService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid PerfilDTO perfilDTO) {
        Perfil perfil = new Perfil();
        BeanUtils.copyProperties(perfilDTO, perfil);

        return ResponseEntity.status(HttpStatus.OK).body(perfilService.save(perfil));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid PerfilDTO perfilDTO) {
        if (!perfilService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhum perfil com este id.");
        }

        Perfil perfil = new Perfil();
        BeanUtils.copyProperties(perfilDTO, perfil);
        perfil.setId(id);

        return ResponseEntity.status(HttpStatus.OK).body(perfilService.save(perfil));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!perfilService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum perfil com este id.");
        }

        perfilService.deleteById(id);

        return ResponseEntity.status(HttpStatus.OK).body("Perfil deletado com sucesso.");
    }

}
