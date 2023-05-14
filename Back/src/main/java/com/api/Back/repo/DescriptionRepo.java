package com.api.Back.repo;

import com.api.Back.models.Description;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author GibrillaKanu
 *
 */
public interface DescriptionRepo extends JpaRepository<Description, Long> {

    List<Description> findByTitleContaining(String title);
}
