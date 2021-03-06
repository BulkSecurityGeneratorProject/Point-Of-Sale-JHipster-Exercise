package asv.exercise.repository;

import asv.exercise.domain.Tax;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tax entity.
 */
public interface TaxRepository extends JpaRepository<Tax,Long> {

}
