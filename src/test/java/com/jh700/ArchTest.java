package com.jh700;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.jh700");

        noClasses()
            .that()
            .resideInAnyPackage("com.jh700.service..")
            .or()
            .resideInAnyPackage("com.jh700.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.jh700.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
