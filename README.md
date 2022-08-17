c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FlujoCoreApiExt", Version = Program.VersionStr });

                var scheme = new OpenApiSecurityScheme
                {
                    Description = "Seguros Lafise Authorization header usando Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey
                };

                c.AddSecurityDefinition("Bearer", scheme);



                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Name = "Bearer",
                            Type = SecuritySchemeType.ApiKey,
                            In = ParameterLocation.Header,
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                         },
                         new string[] {}
                     }
                });

            });
