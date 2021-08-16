package com.coinPrediction.backend.repository;

import com.coinPrediction.backend.domain.Submit;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SubmitRepository extends MongoRepository<Submit, String> {

    Optional<Submit> findById(String id);
}
