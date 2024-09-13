import React, { useState, useEffect, useRef } from "react";

interface AutoCompleteOption {
    value: number | string;
    label: string;
}

interface AutoCompleteProps {
    value: string[] | string | number[] | number | null;
    placeholder?: string;
    noSuggestionsMessage?: string;
    suggestions: AutoCompleteOption[] | null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    dropdown?: boolean;
    multiple?: boolean;
    fixedToSuggestions?: boolean;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    value,
    placeholder = "Typ om te zoeken",
    noSuggestionsMessage = "Geen suggesties",
    suggestions,
    onChange,
    name,
    dropdown = false,
    multiple = false,
    fixedToSuggestions = false,
}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<AutoCompleteOption[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedSuggestion, setSelectedSuggestion] = useState<AutoCompleteOption | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        if (!multiple && value) setInputValue(value as string);
    } , [value]);

    useEffect(() => {
        completeMethod({ query: "" });
    }, [suggestions]);

    const completeMethod = async (e: any) => {
        if(!suggestions) return;
        if (inputValue === "") {
            setFilteredSuggestions(suggestions);
        } else {
            const validSuggestions = e.query ? suggestions.filter((suggestion) => suggestion.label.toLowerCase().includes(e.query.toLowerCase())) : suggestions;
            setFilteredSuggestions(validSuggestions.map((suggestion) => ({ value: suggestion.value, label: suggestion.label })));
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        completeMethod({ query: newValue });
        !showSuggestions && setTimeout(() => setShowSuggestions(true), 100);
        if(!multiple && !fixedToSuggestions) onChange({ target: { value: newValue, name } } as unknown as React.ChangeEvent<HTMLInputElement>);
        if(fixedToSuggestions) onChange({ target: { value: null, name } } as unknown as React.ChangeEvent<HTMLInputElement>);
    };

    const handleSuggestionClick = (suggestion: AutoCompleteOption) => {
        if (multiple && Array.isArray(value)) {
            const newValues = [...value, suggestion.value];
            onChange({ target: { value: newValues, name } } as unknown as React.ChangeEvent<HTMLInputElement>);
            setInputValue("");
        } else {
            onChange({ target: { value: suggestion.value, name } } as unknown as React.ChangeEvent<HTMLInputElement>);
            if(!fixedToSuggestions) {
                setInputValue(suggestion.label);
            } else {
                setSelectedSuggestion(suggestion);
            }
        }
        setShowSuggestions(false);
    };

    const removeSuggestionValue = (index: number) => {
        if (Array.isArray(value)) {
            const newValues = (value as Array<string | number>).filter((_, i) => i !== index);
            onChange({ target: { value: newValues, name } } as unknown as React.ChangeEvent<HTMLInputElement>);
        }
    };

    return (
        <div className="autocomplete-wrapper" ref={wrapperRef}>
            {multiple && Array.isArray(value) && (
                <div className="autocomplete-values">
                    {value.map((val, index) => (
                        <div key={index} className="autocomplete-value">
                            {suggestions?.find(suggestion => suggestion.value === val)?.label}
                            <span onClick={() => removeSuggestionValue(index)} className="autocomplete-value-delete">&times;</span>
                        </div>
                    ))}
                </div>
            )}
            {selectedSuggestion ? (
                <div className="autocomplete-values">
                    <div className="autocomplete-value">
                        {selectedSuggestion.label}
                        <span onClick={() => setSelectedSuggestion(null)} className="autocomplete-value-delete">&times;</span>
                    </div>
                </div>
            ) : (
                <input
                    type="text"
                    className="inherit-font autocomplete-input"
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    name={name}
                />
            )}
            {showSuggestions && (
                <div className="autocomplete-suggestions">
                    {filteredSuggestions.length === 0 ? (
                        <div className="autocomplete-suggestion no-suggestions">
                            {noSuggestionsMessage}
                        </div>
                    ) : filteredSuggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="autocomplete-suggestion"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.label}
                        </div>
                    ))}
                </div>
            )}
            {dropdown &&
                <div className="autocomplete-dropdown" onClick={() => setShowSuggestions(!showSuggestions)}>
                    <i className="pi pi-chevron-down" style={{color: "white"}}></i>
                </div>
            }
        </div>
    );
}

export default AutoComplete;
export type { AutoCompleteOption };