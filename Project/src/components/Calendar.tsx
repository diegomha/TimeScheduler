//https://github.com/aldabil21/react-scheduler
import styles from './Calendar.module.css';
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler, useScheduler } from "@aldabil/react-scheduler";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ptBR } from "date-fns/locale";
import { format } from  'date-fns';
import { ProcessedEvent } from '@aldabil/react-scheduler/types';

export function Calendar() {

    const { resourceViewMode, setResourceViewMode } = useScheduler();
    const EVENTS : ProcessedEvent[] = [
        {
          event_id: 1,
          title: "Event 1",
          start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
          end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
          admin_id: 1,
          disabled: true,
          editable: false,
          deletable: false,
          draggable: true
        },
        {
            event_id: 2,
            title: "Event 1",
            start: new Date(new Date(new Date().setHours(11)).setMinutes(30)),
            end: new Date(new Date(new Date().setHours(12)).setMinutes(30)),
            admin_id: 1,
            disabled: false,
            editable: true,
            deletable: true,
            draggable: true
        }];
        
    const RESOURCES = [
        {
            admin_id: 1,
            title: "Diego",
            mobile: "555666777",
            avatar: "https://picsum.photos/200/300",
            color: "#ab2d2d"
        }];

    async function handleOnDraggable(droppedOn: Date, updatedEvent: ProcessedEvent, originalEvent: ProcessedEvent):Promise<ProcessedEvent>
    {
        const dateFromStart = format(originalEvent.start, "dd'/'MM'/'yyyy HH:mm", {
            locale: ptBR
        });
        const dateFromEnd = format(originalEvent.end, "dd'/'MM'/'yyyy HH:mm", {
            locale: ptBR
        });

        const dateToStart = format(updatedEvent.start, "dd'/'MM'/'yyyy HH:mm", {
            locale: ptBR
        });
        const dateToEnd = format(updatedEvent.end, "dd'/'MM'/'yyyy HH:mm", {
            locale: ptBR
        });

        let result : ProcessedEvent;
        if (confirm(`Deseja alterar a data \nDe: ${dateFromStart} - ${dateFromEnd} \nPara ${dateToStart} - ${dateToEnd} ?`))
            result = updatedEvent;
        
        return new Promise<ProcessedEvent>((value) => {
            value(result)
        });
    }

    return (
        <article className={styles.calendar}>
            <div style={{ textAlign: "center" }}>
                <span>Resource View Mode: </span>
                <Button
                    color={resourceViewMode === "default" ? "primary" : "inherit"}
                    variant={resourceViewMode === "default" ? "contained" : "text"}
                    size="small"
                    onClick={() => setResourceViewMode("default")} >
                    Default
                </Button>
                <Button
                    color={resourceViewMode === "tabs" ? "primary" : "inherit"}
                    variant={resourceViewMode === "tabs" ? "contained" : "text"}
                    size="small"
                    onClick={() => setResourceViewMode("tabs")} >
                    Tabs
                </Button>
            </div>

            <Scheduler
                events={EVENTS}
                resources={RESOURCES}
                locale={ptBR}
                onEventDrop= {handleOnDraggable}
                hourFormat="24"
                translations={
                    {
                        navigation: {
                            month: "Mês",
                            week: "Semana",
                            day: "Dia",
                            today: "Hoje"
                        },
                        form: {
                            addTitle: "Adicionar Evento",
                            editTitle: "Editar Evento",
                            confirm: "Confirmar",
                            delete: "Apagar",
                            cancel: "Cancelar"
                        },
                        event: {
                            title: "Título",
                            start: "Início",
                            end: "Fim",
                            allDay: "Dia Todo"
                       },
                        moreEvents: "Mais...",
                        loading: "Carregando..."
                    }
                }
                resourceFields={{
                    idField: "admin_id",
                    textField: "title",
                    subTextField: "mobile",
                    avatarField: "title",
                    colorField: "color"
                }}
                fields={[
                    {
                    name: "admin_id",
                    type: "select",
                    default: RESOURCES[0].admin_id,
                    options: RESOURCES.map((res) => {
                        return {
                            id: res.admin_id,
                            text: `${res.title} (${res.mobile})`,
                            value: res.admin_id //Should match "name" property
                        };
                    }),
                    config: { label: "Funcionário", required: true }
                    }
                ]}
                viewerExtraComponent={(fields, event) => {
                    return (
                    <div>
                        {fields.map((field, i) => {
                            if (field.name === "admin_id") {
                                const admin = field.options?.find(
                                    (fe) => fe.id === event.admin_id
                                );
                                return (
                                    <Typography
                                        key={i}
                                        style={{ display: "flex", alignItems: "center" }}
                                        color="textSecondary"
                                        variant="caption"
                                        noWrap >
                                            
                                        <PersonRoundedIcon /> {admin?.text}
                                    </Typography>
                                );
                            } else {
                                return "";
                            }
                        })}
                    </div>
                    );
                    }
                }
            />
        </article>
    );
}