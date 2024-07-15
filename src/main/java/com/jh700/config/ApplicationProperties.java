package com.jh700.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Dsp Upgrade Ang 11.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link tech.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {}
